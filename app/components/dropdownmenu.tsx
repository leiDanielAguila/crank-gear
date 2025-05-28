import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";


export function DropdownMenu() {
  return (
    <Dropdown>
      <MenuButton variant="plain" size="lg">Menu</MenuButton>
      <Menu size="lg">
        <MenuItem>
          <ListItemDecorator />
          Men
          <ListItemDecorator />
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Women
          <ListItemDecorator />
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Kids
          <ListItemDecorator />
        </MenuItem>
        <MenuItem>
          <ListItemDecorator />
          Featured
          <ListItemDecorator />
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}