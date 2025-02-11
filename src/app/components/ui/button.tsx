import { cn } from "@/app/lib/utils";

export function Button({
    children,
    variant="primary",
    ...props
}:{
    children:React.ReactNode;
    variant?:"primary"| "secondary" |"ghost";
}& React.BaseHTMLAttributes<HTMLButtonElement>
){
    return (
        <button {...props}
        className={cn("p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70"
        ,variant==="primary" && "bg-accent-purple"
        ,variant==="secondary" && "bg-background-tertiary"
        ,variant==="ghost" && "bg-border-primary",
        props.className
        )}
        >
            {children}
        </button>
    )
}