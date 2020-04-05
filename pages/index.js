import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns: campaigns };
    }

    renderCampaingns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true
            };
        });
        return <Card.Group items={items}></Card.Group>;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Button
                        floated="right"
                        content="Create Campaign"
                        icon="add"
                        primary
                    />
                    {this.renderCampaingns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;