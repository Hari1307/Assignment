import { ReactNode } from "react"

type FormWrapperProps = {
    title: string,
    children: ReactNode
}
export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <div style={{
                display: "grid", justifyContent: "center", gap: "1rem 1rem",
                gridTemplateColumns: "auto minmax(auto,400px)",
                backgroundColor: "white"
            }}>{children}</div>
        </div>
    )
}