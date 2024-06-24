import React from 'react';
import { Example } from "./Example";
import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Can you predict the demand for Veggie Burrito for tomorrow ?",
    "What is the most disliked dish according to customers and why?",
    "Can you check how fresh is guacamole in the inventory?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the impact of interest rates and GDP in financial markets.",
    "What is the expected trend for the S&P 500 index over the next five years?",
    "Can you identify any correlation between oil prices and stock market trends?"
];

type TaskType = 'products' | 'sales' | 'feedback' | 'inventory' | 'expenses' |'emails' |'marketing'  ;

const TASK_EXAMPLES: Record<TaskType, string[]> = {
    products: ["Which products sales are declining from Jan 2024 to Mar 2024 ?","What is our least sold product for the month of March 2024?", "What is the most sold product for the month of May 2024?"],
    sales: ["What is the demand for Veggie Burritos tomorrow ?","Which products sales are declining from Jan 2024 to Mar 2024 ?", "What is the most sold product for the month of May 2024?"],
    feedback: ["What is the most disliked dish according to customers and why ?", "Are there any insights on staff from the feedback ?", "What is the feedback on the introduction of alcohol from customers?"],
    inventory: ["Can you check how fresh the guacamole is?", "Are any items in the inventory expiring this week ?", "Can you check how fresh the Bell Peppers are?"],
    expenses: ["can you detect any anomalies in the expenses from dec 2023 to may 2024?", "Can you identify which expense categories have shown an increase from December 2023 to May 2024?","can you detect any anomalies in the expenses from dec 2023 to may 2024?"],
    emails: ["Can you find any email about upcoming alcohol order ", "Can you send a mail cancelling the delivery of alcohol and informing that no longer need alchohol","Can you summarise the recent 10 important mails ?"],
    marketing: ["Send a mail to all customers about our new promotion on 1+1 offer on Veggie burrito ", "Did we get any tweets from customers as complaints ?","can you make a tweet wishing our customers Happy Cinco de Mayo"]


};

interface Props {
    onExampleClicked: (value: string) => void;
    activeTask?: TaskType;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V, activeTask }: Props) => {
    const examplesToShow = useGPT4V ? GPT4V_EXAMPLES : (activeTask && TASK_EXAMPLES[activeTask]) || DEFAULT_EXAMPLES;

    return (
        <ul className={styles.examplesNavList}>
            {examplesToShow.map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
