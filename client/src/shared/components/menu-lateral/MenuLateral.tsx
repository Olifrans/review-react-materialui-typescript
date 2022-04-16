import {
  Drawer,
  useTheme,
  Avatar,
  Divider,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";

export const MenuLateral = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  //const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Olifrans"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEMsFF44Zk6iA/profile-displayphoto-shrink_200_200/0/1649161948713?e=1655337600&v=beta&t=Ikkh6A0EgPRD-7Rgc8bznw6V44EtuWhRo859G01mv8Y"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {/* <ListItemButton onClick={toggleTheme}> */}
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
