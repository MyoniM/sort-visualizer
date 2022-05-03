import { cloneElement, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppShell,
  Navbar,
  Header,
  Button,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { generateNewArray } from "../../helpers/generateNewArray";
import logo from "../../public/favicon.png";
import classes from "./layout.module.css";

const navigation = [
  {
    name: "All Algorithms",
    route: "/",
  },
  {
    name: "Bubble Sort (Easy)",
    route: "/bubble-sort",
  },
  {
    name: "Insertion Sort (Easy)",
    route: "/insertion-sort",
  },
  {
    name: "Selection Sort (Easy)",
    route: "/selection-sort",
  },
  {
    name: "Counting Sort (Easy)",
    route: "/counting-sort",
  },
  {
    name: "Merge Sort",
    route: "/merge-sort",
  },
  {
    name: "Quick Sort",
    route: "/quick-sort",
  },
  {
    name: "Heap Sort",
    route: "/heap-sort",
  },
];

interface IProps {
  children: ReactElement;
}
export default function Layout({ children }: IProps) {
  const [array, _] = useState<number[]>(
    generateNewArray()
    // [7, 4, 10, 8, 3, 1]
  );
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";
  const router = useRouter();
  let currentRoute = router.pathname;
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
          <div className={classes.navBarWrapper}>
            <div className={classes.navBarItems}>
              <h4 style={{ margin: 0 }}>Algorithm type</h4>
              {navigation.map((e, i) => (
                <Link key={i} href={e.route}>
                  <Button
                    fullWidth
                    variant={currentRoute == e.route ? "filled" : "light"}
                  >
                    {e.name}
                  </Button>
                </Link>
              ))}
            </div>
            <div className={classes.navBarInfo}>
              <b>Yonatan Merkebu</b>
              <br />
              <h5>se.yonatan.merkebu@gmail.com</h5>
            </div>
          </div>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div className={classes.header}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image src={logo} height={30} width={30} /> SORTING VISUALIZER
            </Text>
            <ActionIcon
              variant="outline"
              color={dark ? "#1a3958" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
          </div>
        </Header>
      }
    >
      {cloneElement(children, { array })}
    </AppShell>
  );
}
