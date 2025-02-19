import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/styled-system";
import { getColor, mode } from "@chakra-ui/theme-tools";

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  addon: {
    bg: "transparent",
  },
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md",
  },

  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md",
  },

  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm",
  },

  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm",
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props),
  };
}

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  return {
    field: {
      border: "1px solid",
      borderColor: "ui.20",
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _focus: {
        zIndex: 1,
        borderColor: "ui.80",
      },
      _hover: {
        borderColor: "ui.40",
      },
      _invalid: {
        borderColor: "system.danger.100",
      },
      _placeholder: {
        color: "ui.40",
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
    },
    addon: {
      border: "1px solid",
      borderColor: "ui.20",
    },
  };
};

const variantFilled: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      border: "1x solid",
      borderColor: "ui.5",
      bg: "ui.5",
      _hover: {
        bg: "ui.10",
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _invalid: {
        borderColor: "system.danger.100",
      },
      _focus: {
        bg: "ui.10",
        borderColor: getColor(theme, fc),
      },
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
    },
  };
};

const variantFlushed: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);

  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
      },
      _focus: {
        borderColor: getColor(theme, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`,
      },
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
    },
  };
};

const variantUnstyled: PartsStyleObject<typeof parts> = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto",
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto",
  },
};

const variants = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled,
};

const defaultProps = {
  size: "md",
  variant: "outline",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
