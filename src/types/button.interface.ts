export interface ButtonComponentProps {
    onClick: () => void
    children: string;
    isRound: boolean;
    Icon?: React.FC;
    variant: string;
}