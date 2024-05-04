import { GenericComponentProps } from "@/types";
import { humanReadable } from "@/utils/lang";
import DropdownList from "./List";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SkillConfig, SkillGroup } from "@/me";

export type TDropdownProps<T extends string> = {
  label: string;
  items: T[];
  value: T;
  handleChange: (value: T) => void;
} & GenericComponentProps;

const Dropdown = <T extends SkillGroup>({
  label,
  items,
  value,
  handleChange,
  ...props
}: TDropdownProps<T>) => {
  const id = label.replaceAll(" ", "-").toLowerCase();

  return (
    <FormControl
      size="small"
      sx={{
        width: "100%",
        maxWidth: "80%",
        bg: "theme.variant.paper",
      }}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        fullWidth
        className={`${props.className}`}
        onChange={(e) => handleChange(e.target.value as T)}
      >
        {items.map((item, i) => (
          <MenuItem key={`${id}-item-${i}`} value={item}>
            {humanReadable(item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { Dropdown, DropdownList };
