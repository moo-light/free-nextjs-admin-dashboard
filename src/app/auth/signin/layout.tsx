
export default function layout({ children, ...props }: Readonly<{ children: React.ReactNode; }>) {
    return <div>{children}</div>;
}