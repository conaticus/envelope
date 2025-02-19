import type { SystemStyleObject } from "@chakra-ui/styled-system";

const baseStyle: SystemStyleObject = {
  borderColor: "ui.20",
  borderRadius: "sm",
  borderWidth: "1px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap",
  _active: {
    borderBottomWidth: "1px",
  },
};

export default {
  baseStyle,
};
