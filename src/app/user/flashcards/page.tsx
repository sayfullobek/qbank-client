"use client";
import { FlashcardType } from "../../../../types/type";
import { AutoGet } from "../../../../lib/api/service";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import CreateFlashcardModal from "../../../components/custom/modal/CreateFlashcardModal";
// import { getAllFlashcards } from "../services/flashcardService";
// import { FlashcardType } from "../types/type";
// import { Button } from "@/components/ui/button";

const Flashcards = () => {
    const [cards, setCards] = useState<FlashcardType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await AutoGet<FlashcardType[]>("/flashcards");
                console.log(data)
                setCards(data);
            } catch (error) {
                console.error("❌ Flashcard fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <CreateFlashcardModal
                isOpen={isOpen}
                onClose={onClose}
                onCreated={(newCard) => setCards((prev) => [newCard, ...prev])}
            />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">📚 Flashcards</h2>
                <Button onClick={onOpen}>+ Create Flashcard</Button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2">{card.front}</h3>
                            <p className="text-gray-700">{card.back}</p>

                            {card.subject && <p className="text-sm text-gray-500 mt-2">📌 Subject: {card.subject}</p>}
                            {card.difficulty && <p className="text-sm text-gray-500">⭐ Difficulty: {card.difficulty}</p>}

                            {card.front_image && (
                                <img src={card.front_image} alt="Front" className="mt-2 rounded w-full h-32 object-cover" />
                            )}
                            {card.back_image && (
                                <img src={card.back_image} alt="Back" className="mt-2 rounded w-full h-32 object-cover" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Flashcards;
