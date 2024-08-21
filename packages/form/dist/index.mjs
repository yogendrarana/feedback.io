// src/components/form.tsx
import { useState } from "react";

// src/ui/dropdown-menu.tsx
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

// src/lib/utils.ts
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/ui/dropdown-menu.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/ui/input.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/form.tsx
import JSConfetti from "js-confetti";

// src/ui/button.tsx
import * as React3 from "react";
import { Slot } from "@radix-ui/react-slot";

// ../../node_modules/class-variance-authority/dist/index.mjs
import { clsx as clsx2 } from "clsx";
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx2;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// src/ui/button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React3.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx3(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/ui/textarea.tsx
import * as React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Textarea = React4.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/form.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var generateConfetti = async () => {
  const jsConfetti = new JSConfetti();
  await jsConfetti.addConfetti({
    confettiColors: ["#fdd835", "#4caf50", "#2196f3", "#f44336", "#ff9800"],
    confettiRadius: 3,
    confettiNumber: 100
  });
};
var Form = (props) => {
  const { clientId, projectId, contentClassName, triggerClassName } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ email: "", type: "", feedback: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    if (!clientId || !projectId) {
      setError("Provide client and project ID as props.");
      return;
    }
    if (!data.email || !data.type || !data.feedback) {
      setError("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("https://feedbackio.vercel.app/api/v1/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": clientId,
          "x-project-id": projectId
        },
        body: JSON.stringify(data)
      });
      const jsonResponse = await response.json();
      if (!response.ok) {
        throw new Error(jsonResponse.message);
      }
      if (!jsonResponse.success) {
        throw new Error(jsonResponse.message);
      }
      setOpen(false);
      setLoading(false);
      await generateConfetti();
      setData({ email: "", type: "", feedback: "" });
    } catch (error2) {
      setError(error2.message);
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs2(DropdownMenu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx5(DropdownMenuTrigger, { className: cn("px-3 py-2 rounded-md border", triggerClassName), children: "Feedback" }),
    /* @__PURE__ */ jsx5(
      DropdownMenuContent,
      {
        align: "end",
        className: cn("w-[400px] p-4", contentClassName),
        children: /* @__PURE__ */ jsxs2(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx5("label", { htmlFor: "email", className: "text-sm font-medium", children: "Your Email" }),
                /* @__PURE__ */ jsx5(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "you@example.com",
                    value: data.email,
                    onChange: (e) => setData({ ...data, email: e.target.value }),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx5("label", { htmlFor: "feedback", className: "text-sm font-medium", children: "Your Feedback" }),
                /* @__PURE__ */ jsx5(
                  Textarea,
                  {
                    id: "feedback",
                    rows: 3,
                    value: data.feedback,
                    placeholder: "Please enter your feedback here...",
                    onChange: (e) => setData({ ...data, feedback: e.target.value }),
                    className: "resize-none",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsx5("div", { className: "flex gap-2", children: ["bug", "feature", "suggestion"].map((type) => /* @__PURE__ */ jsxs2(
                Button,
                {
                  type: "button",
                  variant: data.type === type ? "secondary" : "outline",
                  onClick: () => setData({ ...data, type }),
                  className: "flex-1 border",
                  children: [
                    type === "bug" && "\u{1F41B}",
                    type === "feature" && "\u2728",
                    type === "suggestion" && "\u{1F4A1}",
                    /* @__PURE__ */ jsx5("span", { className: "ml-2 capitalize", children: type })
                  ]
                },
                type
              )) }),
              error && /* @__PURE__ */ jsx5("p", { style: { color: "red" }, className: "text-red-500 text-sm", children: error }),
              /* @__PURE__ */ jsx5(
                Button,
                {
                  type: "submit",
                  variant: "default",
                  className: "w-full",
                  disabled: loading,
                  children: loading ? "Submitting..." : "Submit Feedback"
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
export {
  Form
};