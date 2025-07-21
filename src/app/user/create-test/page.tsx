"use client";

import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { TestSettings } from '../../../../types/type';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Switch,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  SimpleGrid
} from '@chakra-ui/react';

function CreateTest() {
  const [settings, setSettings] = useState<TestSettings>({
    isLearningMode: true,
    isTimedMode: false,
    testName: '',
    scoringMode: 'all_62',
    selectedSubjects: [],
    selectedSystems: [],
    maxQuestions: 40
  });

  // Color mode values
  const bgCard = useColorModeValue("white", "gray.800");
  const boxShadowCard = useColorModeValue("md", "dark-lg");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const headerBg = useColorModeValue("linear(to-r, blue.600, blue.700)", "linear(to-r, blue.700, blue.800)");
  const pageBg = useColorModeValue("linear(to-br, blue.50, indigo.100)", "linear(to-br, gray.900, gray.800)");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const selectedBg = useColorModeValue("blue.100", "blue.900");
  const radioSelected = useColorModeValue("blue.50", "blue.800");
  const radioBorder = useColorModeValue("blue.500", "blue.300");

  const subjects = [
    { id: 'anatomy', name: 'Anatomy', count: 14 },
    { id: 'behavioral', name: 'Behavioral Science', count: 0 },
    { id: 'histology', name: 'Histology', count: 0 },
    { id: 'physiology', name: 'Physiology', count: 0 },
    { id: 'pharmacology', name: 'Pharmacology', count: 2 },
    { id: 'embryology', name: 'Embryology', count: 3 },
    { id: 'genetics', name: 'Genetics', count: 0 },
    { id: 'biostatistics', name: 'Biostatistics', count: 0 },
    { id: 'immunology', name: 'Immunology', count: 3 }
  ];

  const systems = [
    { id: 'allergy', name: 'Allergy & Immunology', count: 3 },
    { id: 'dermatology', name: 'Dermatology', count: 0 },
    { id: 'cardiovascular', name: 'Cardiovascular System', count: 55 },
    { id: 'pulmonary', name: 'Pulmonary & Critical Care', count: 0 },
    { id: 'gastrointestinal', name: 'Gastrointestinal & Nutrition', count: 0 },
    { id: 'hematology', name: 'Hematology & Oncology', count: 1 },
    { id: 'renal', name: 'Renal, Urinary Systems & Electrolytes', count: 0 },
    { id: 'nervous', name: 'Nervous System', count: 0 },
    { id: 'rheumatology', name: 'Rheumatology/Orthopedics & Sports', count: 0 }
  ];

  const scoringOptions = [
    { id: 'all_62', label: 'Hammasi 62', selected: true },
    { id: 'unprocessed_35', label: 'Ishlanmagan 35' },
    { id: 'incorrect_3', label: "Noto'g'ri 3" },
    { id: 'not_marked_0', label: 'Belgilangan 0' },
    { id: 'difficult_59', label: "O'tkazib yuborilgan 59" },
    { id: 'correct_0', label: "To'g'ri 0" }
  ];

  const toggleSubject = (subjectId: string) => {
    setSettings(prev => ({
      ...prev,
      selectedSubjects: prev.selectedSubjects.includes(subjectId)
        ? prev.selectedSubjects.filter(id => id !== subjectId)
        : [...prev.selectedSubjects, subjectId]
    }));
  };

  const toggleSystem = (systemId: string) => {
    setSettings(prev => ({
      ...prev,
      selectedSystems: prev.selectedSystems.includes(systemId)
        ? prev.selectedSystems.filter(id => id !== systemId)
        : [...prev.selectedSystems, systemId]
    }));
  };

  const totalQuestions = [...settings.selectedSubjects, ...settings.selectedSystems]
    .reduce((total, id) => {
      const subject = subjects.find(s => s.id === id);
      const system = systems.find(s => s.id === id);
      return total + (subject?.count || system?.count || 0);
    }, 0);

  return (
    <Box 
      minH="100vh" 
      bgGradient={pageBg}
      pb={8}
    >
      {/* Header */}
      <Box 
        bgGradient={headerBg}
        color="white"
        py={6}
        px={6}
        boxShadow="lg"
      >
        <Heading as="h1" size="lg" fontWeight="bold">
          Test Yaratish
        </Heading>
      </Box>

      <Box maxW="7xl" mx="auto" p={6}>
        {/* Main Content Card */}
        <Box 
          bg={bgCard}
          rounded="xl"
          boxShadow={boxShadowCard}
          overflow="hidden"
        >
          <Box p={8}>
            <Heading as="h2" size="lg" fontWeight="bold" color={textColor} mb={8}>
              Test Yaratish
            </Heading>

            {/* Test Mode Settings */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={8}>
              <Box>
                <Heading as="h3" size="md" fontWeight="semibold" color={textColor} mb={4}>
                  Test Rejimi:
                </Heading>
                <Stack spacing={4}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text color={textColor}>O'rganuvchi</Text>
                    <Switch 
                      colorScheme="blue"
                      isChecked={settings.isLearningMode}
                      onChange={(e) => setSettings(prev => ({ 
                        ...prev, 
                        isLearningMode: e.target.checked 
                      }))}
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text color={textColor}>Vaqtga qo'yish</Text>
                    <Switch 
                      colorScheme="blue"
                      isChecked={settings.isTimedMode}
                      onChange={(e) => setSettings(prev => ({ 
                        ...prev, 
                        isTimedMode: e.target.checked 
                      }))}
                    />
                  </Flex>
                </Stack>
              </Box>

              <Box>
                <Heading as="h3" size="md" fontWeight="semibold" color={textColor} mb={4}>
                  Test Nomi - Ixtiyoriy:
                </Heading>
                <Input
                  placeholder="Nomsiz Test"
                  value={settings.testName}
                  onChange={(e) => setSettings(prev => ({ ...prev, testName: e.target.value }))}
                  borderColor={borderColor}
                  _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
                />
              </Box>
            </SimpleGrid>

            {/* Scoring Options */}
            <Box mb={8}>
              <Heading as="h3" size="md" fontWeight="semibold" color={textColor} mb={4}>
                Savol Rejimi:
              </Heading>
              <RadioGroup 
                value={settings.scoringMode} 
                onChange={(value) => setSettings(prev => ({ ...prev, scoringMode: value }))}
              >
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                  {scoringOptions.map((option) => (
                    <Box
                      key={option.id}
                      as="label"
                      p={3}
                      borderRadius="lg"
                      borderWidth="2px"
                      cursor="pointer"
                      transition="all 0.2s"
                      borderColor={settings.scoringMode === option.id ? radioBorder : borderColor}
                      bg={settings.scoringMode === option.id ? radioSelected : 'transparent'}
                      _hover={{
                        borderColor: settings.scoringMode === option.id ? radioBorder : 'gray.300'
                      }}
                    >
                      <Flex alignItems="center">
                        <Radio
                          value={option.id}
                          colorScheme="blue"
                          mr={3}
                          isChecked={settings.scoringMode === option.id}
                        />
                        <Text fontSize="sm" fontWeight="medium">
                          {option.label}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </RadioGroup>
            </Box>

            {/* Subjects and Systems Selection */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mb={8}>
              {/* Subjects */}
              <Box>
                <Flex alignItems="center" justifyContent="space-between" mb={4}>
                  <Heading as="h3" size="md" fontWeight="semibold" color={textColor}>
                    Fanlar:
                  </Heading>
                  <Checkbox colorScheme="blue" size="sm">
                    Barchasini belgilash
                  </Checkbox>
                </Flex>
                <Box bg={cardBg} rounded="lg" p={4} maxH="320px" overflowY="auto">
                  <Stack spacing={2}>
                    {subjects.map((subject) => (
                      <Box
                        key={subject.id}
                        as="label"
                        p={3}
                        rounded="lg"
                        cursor="pointer"
                        transition="all 0.2s"
                        bg={settings.selectedSubjects.includes(subject.id) ? selectedBg : 'transparent'}
                        borderWidth="1px"
                        borderColor={settings.selectedSubjects.includes(subject.id) ? 'blue.200' : 'transparent'}
                        _hover={{
                          bg: useColorModeValue('white', 'gray.600'),
                          borderColor: borderColor
                        }}
                      >
                        <Flex alignItems="center" justifyContent="space-between">
                          <Flex alignItems="center">
                            <Checkbox
                              isChecked={settings.selectedSubjects.includes(subject.id)}
                              onChange={() => toggleSubject(subject.id)}
                              colorScheme="blue"
                              mr={3}
                            />
                            <Text fontSize="sm" fontWeight="medium" color={textColor}>
                              {subject.name}
                            </Text>
                          </Flex>
                          <Text fontSize="xs" color="gray.500" bg="gray.200" px={2} py={1} rounded="full">
                            ({subject.count})
                          </Text>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>

              {/* Systems */}
              <Box>
                <Flex alignItems="center" justifyContent="space-between" mb={4}>
                  <Heading as="h3" size="md" fontWeight="semibold" color={textColor}>
                    Tizimlar:
                  </Heading>
                  <Checkbox colorScheme="blue" size="sm">
                    Barchasini belgilash
                  </Checkbox>
                </Flex>
                <Box bg={cardBg} rounded="lg" p={4} maxH="320px" overflowY="auto">
                  <Stack spacing={2}>
                    {systems.map((system) => (
                      <Box
                        key={system.id}
                        as="label"
                        p={3}
                        rounded="lg"
                        cursor="pointer"
                        transition="all 0.2s"
                        bg={settings.selectedSystems.includes(system.id) ? selectedBg : 'transparent'}
                        borderWidth="1px"
                        borderColor={settings.selectedSystems.includes(system.id) ? 'blue.200' : 'transparent'}
                        _hover={{
                          bg: useColorModeValue('white', 'gray.600'),
                          borderColor: borderColor
                        }}
                      >
                        <Flex alignItems="center" justifyContent="space-between">
                          <Flex alignItems="center">
                            <Checkbox
                              isChecked={settings.selectedSystems.includes(system.id)}
                              onChange={() => toggleSystem(system.id)}
                              colorScheme="blue"
                              mr={3}
                            />
                            <Text fontSize="sm" fontWeight="medium" color={textColor}>
                              {system.name}
                            </Text>
                          </Flex>
                          <Text fontSize="xs" color="gray.500" bg="gray.200" px={2} py={1} rounded="full">
                            ({system.count})
                          </Text>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </SimpleGrid>

            {/* Maximum Questions */}
            <Box mb={8}>
              <Heading as="h3" size="md" fontWeight="semibold" color={textColor} mb={4}>
                Maksimal Savollar Soni:
              </Heading>
              <NumberInput
                value={settings.maxQuestions}
                min={1}
                max={100}
                onChange={(valueString) => setSettings(prev => ({ 
                  ...prev, 
                  maxQuestions: parseInt(valueString) || 0 
                }))}
                maxW="xs"
              >
                <NumberInputField 
                  borderColor={borderColor}
                  _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
                />
              </NumberInput>
            </Box>

            {/* Action Buttons */}
            <Flex 
              alignItems="center" 
              justifyContent="space-between" 
              pt={6} 
              borderTopWidth="1px"
              borderColor={borderColor}
            >
              <Text fontSize="sm" color={textColor}>
                Umumiy Savollar Soni: 
                <Text as="span" fontWeight="semibold" color="blue.500" ml={1}>
                  {totalQuestions}
                </Text>
              </Text>
              <Button 
                colorScheme="blue"
                bgGradient="linear(to-r, blue.600, blue.700)"
                _hover={{ bgGradient: 'linear(to-r, blue.700, blue.800)' }}
                leftIcon={<Plus size={20} />}
                size="lg"
                px={8}
                boxShadow="lg"
                _active={{ transform: 'scale(0.98)' }}
                transition="all 0.2s"
              >
                Test Yaratish
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateTest;