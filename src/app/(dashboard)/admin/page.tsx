"use client";

import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "../../../../lib/checkToken";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function AdminDashboardPage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const tableHeaderBg = useColorModeValue("gray.50", "gray.700");

  const router = useRouter();
  useEffect(() => {
    checkToken(router);
  }, [router]);

  const pieData = [
    { name: "Passed", value: 72 },
    { name: "Failed", value: 28 },
  ];
  const pieColors = ["#48BB78", "#F56565"];

  const barData = [
    { month: "Jan", tests: 300, sales: 1000 },
    { month: "Feb", tests: 400, sales: 1500 },
    { month: "Mar", tests: 450, sales: 1800 },
    { month: "Apr", tests: 500, sales: 2100 },
    { month: "May", tests: 600, sales: 2500 },
  ];

  return (
    <Flex direction="column" gap={8} px={{ base: 4, md: 6 }} py={6}>
      {/* Statistic Cards */}
      <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} spacing={6}>
        <StatCard title="Total Students" value="2,345" change="+10%" colorScheme="green" />
        <StatCard title="Tests Taken" value="5,120" change="+15%" colorScheme="blue" />
        <StatCard title="Average Score" value="76%" change="+4%" colorScheme="yellow" />
        <StatCard title="Active Subscriptions" value="1,024" change="+8%" colorScheme="purple" />
      </SimpleGrid>

      {/* Overview Charts */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box bg={cardBg} borderRadius="lg" shadow="md" p={6}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading fontSize="lg" color={textColor}>Test Pass Ratio</Heading>
            <Text fontSize="sm" color="gray.500">Last 30 days</Text>
          </Flex>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box bg={cardBg} borderRadius="lg" shadow="md" p={6}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading fontSize="lg" color={textColor}>Monthly Test Volume & Sales</Heading>
            <Text fontSize="sm" color="gray.500">This year</Text>
          </Flex>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="month" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip />
              <Legend />
              <Bar dataKey="tests" fill="#4299E1" radius={[4, 4, 0, 0]} name="Tests" />
              <Bar dataKey="sales" fill="#9F7AEA" radius={[4, 4, 0, 0]} name="Sales ($)" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </SimpleGrid>

      {/* Recent Activity Table */}
      <Box bg={cardBg} borderRadius="lg" shadow="md" p={6}>
        <Flex justify="space-between" align="center" mb={4}>
          <Heading fontSize="lg" color={textColor}>Recent Student Activity</Heading>
          <Text fontSize="sm" color="gray.500">Today</Text>
        </Flex>
        <Box overflowX="auto">
          <Table variant="simple" size="sm">
            <Thead bg={tableHeaderBg}>
              <Tr>
                <Th>Student</Th>
                <Th>Test Name</Th>
                <Th>Score</Th>
                <Th>Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TableRow user="Ali Karimov" action="Anatomy Basics" score="84% " time="10:15" />
              <TableRow user="Zarina Omonova" action="Pharmacology Intro" score="91%" time="10:45" />
              <TableRow user="Bekzod Rustamov" action="Pathology MCQs" score="77%" time="11:10" />
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
}

function StatCard({ title, value, change, colorScheme }: { title: string; value: string; change: string; colorScheme: string }) {
  return (
    <Stat
      p={6}
      shadow="md"
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <StatLabel color="gray.500">{title}</StatLabel>
      <StatNumber color={useColorModeValue("gray.900", "white")}>{value}</StatNumber>
      <StatHelpText color={`${colorScheme}.600`}>{change}</StatHelpText>
    </Stat>
  );
}

function TableRow({ user, action,score, time }: { user: string; action: string; score: string; time: string }) {
  const textColor = useColorModeValue("gray.900", "white");
  return (
    <Tr>
      <Td color={textColor}>{user}</Td>
      <Td color={textColor}>{action}</Td>
      <Td color={textColor}>{score}</Td>
      <Td color={textColor}>{time}</Td>
    </Tr>
  );
}
