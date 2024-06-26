import React, { useState } from 'react';
import { Button } from "@fluentui/react-components";
import { Database24Regular, QuestionCircle24Regular } from "@fluentui/react-icons"; // Import icons
import { Panel, Text } from "@fluentui/react";
import styles from './Onboard.module.css';

const Onboard: React.FC = () => {
    const [isonboardOverlayOpen, setIsonboardOverlayOpen] = useState(false);

    const toggleonboardOverlay = () => {
        setIsonboardOverlayOpen(!isonboardOverlayOpen);
    };

    return (
        <div className={styles.container}>
            <Button icon={<Database24Regular />} onClick={toggleonboardOverlay}>
                {"Onboard"}
            </Button>
            <Panel
                headerText="Onboard"
                isOpen={isonboardOverlayOpen}
                onDismiss={toggleonboardOverlay}
                closeButtonAriaLabel="Close"
                isLightDismiss
            >
                <div className={styles.overlay}>
                    <Text>This is a demo showcasing App's implementation for a Mexican restaurant with randomly generated data.</Text>

                    <Text variant="medium" block className={styles.sectionTitle}>Databases used:</Text>
                    <ul>
                        <li><strong>Sales Database:</strong> Tracks all sales transactions, allowing detailed sales analysis.</li>
                        <li><strong>Inventory Database:</strong> Manages inventory levels and monitors the freshness of products.</li>
                        <li><strong>Feedback Database:</strong> Collects and analyzes customer feedback to improve products and services.</li>
                        <li><strong>Expenses Database:</strong> Logs all business expenses and helps in detecting anomalies and managing costs.</li>
                        <li><strong>Product Database:</strong> Stores product information and ingredients.</li>
                        <li><strong>Customer Database:</strong> Stores information about customers and their emails.</li>
                    </ul>

                    
                    <Text>Soon building onboarding to easily integrate your data with the app.</Text>
                </div>
            </Panel>
        </div>
    );
};

export default Onboard;
