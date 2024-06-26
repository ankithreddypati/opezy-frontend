import React, { useState } from 'react';
import { Button } from "@fluentui/react-components";
import { QuestionCircle24Regular } from "@fluentui/react-icons"; // Import an icon similar to ClearChatButton
import { Panel, Text } from "@fluentui/react";
import styles from './Help.module.css';

const Help: React.FC = () => {
    const [isHelpOverlayOpen, setIsHelpOverlayOpen] = useState(false);

    const toggleHelpOverlay = () => {
        setIsHelpOverlayOpen(!isHelpOverlayOpen);
    };

    return (
        <div className={styles.container}>
            <Button icon={<QuestionCircle24Regular />} onClick={toggleHelpOverlay}>
                {"About"}
            </Button>
            <Panel
                headerText="About"
                isOpen={isHelpOverlayOpen}
                onDismiss={toggleHelpOverlay}
                closeButtonAriaLabel="Close"
                isLightDismiss
            >
                <div className={styles.overlay}>
                    <Text variant="large">Welcome to Opezy!</Text>
                    <Text>Opezy is an AI Co-pilot designed to help small business owners make data-driven decisions and manage various business operations efficiently. This is a demo showcasing its implementation for a Mexican restaurant</Text>
   
                    <Text variant="medium" block className={styles.sectionTitle}>Key Features:</Text>
                    <ul>
                        <li>Analyze sales trends and identify best-selling and underperforming products.</li>
                        <li>Monitor inventory freshness using GPT-4 vision and make informed restocking decisions.</li>
                        <li>Generate marketing strategies and promotional content for social media.</li>
                        <li>Provide customer feedback analysis to improve products and services.</li>
                        <li>Detect anomalies in expenses to prevent fraud and manage costs effectively.</li>
                        <li>Allow users to interact with a voice-enabled chat bot for real-time support and information.</li>

                    </ul>

                    <Text variant="medium" block className={styles.sectionTitle}>Technologies and Databases Used:</Text>
                    <ul>
                        <li><strong>Azure OpenAI:</strong> For intelligent data analysis and natural language processing.</li>
                        <li><strong>Azure Cosmos DB for MongoDB:</strong>For storing sales, inventory, customer feedback, and expense data and vector embeddings</li>
                        <li><strong>LangChain:</strong> For developing conversational agents and integrating various tools.</li>
                    </ul>

                                    </div>
            </Panel>
        </div>
    );
};

export default Help;
