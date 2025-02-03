import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getRequest} from "../../../../common/util/Fetch.js";
import {CHANNELS_URL} from "../../../../common/util/constants.js";

export default function MarketingCampaignsCreateUpdateModalForm(props) {
    const {
        handleConfirm,
        handleCancelClick,
        setCampaignToSubmit,
        campaignToSubmit
    } = props;

    const [selectedChannel, setSelectedChannel] = useState([])
    const [channelsList, setChannelsList] = useState()


    useEffect(() => {
        getRequest(CHANNELS_URL)
            .then(response => {
                setChannelsList(response);
            })
            .catch(err => {
                throw err;
            });
    }, []);

    return (
        <form>
            {/*Name*/}
            <TextField
                required={true}
                label={"name"}
                value={campaignToSubmit.campaignName}
                onChange={(e) =>
                    setCampaignToSubmit(prev => ({
                        ...prev, campaignName: e.target.value
                }))}/>

            {/*Channel Select*/}
            <FormControl sx={{minWidth: 200}}>
                <InputLabel>Channels</InputLabel>
                <Select
                    required={true}
                    multiple
                    variant={"filled"}
                    value={selectedChannel}
                    onChange={(e) => setSelectedChannel(e.target.value)}
                    onClose={() => setCampaignToSubmit(prev => ({
                        ...prev, channelId: selectedChannel
                    }))}
                    input={<OutlinedInput label="Name" />}
                 >
                    {channelsList?.map((channel) => (
                        <MenuItem
                            key={channel.channelId}
                            value={channel.channelId}
                        >
                            {channel.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/*Description*/}
            <TextField
                required={true}
                label={"Description"}
                value={campaignToSubmit.campaignDescription}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignDescription: e.target.value
                }))}/>

            {/*Budget*/}
            <TextField
                slotProps={{ inputLabel: { shrink: true }}}
                required={true}
                label={"Budget"}
                type={"number"}
                value={campaignToSubmit.campaignBudget}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignBudget: e.target.valueAsNumber
                }))}/>

            {/*Campaign Status*/}
            <TextField
                required={true}
                label={"Campaign Status"}
                value={campaignToSubmit.campaignStatus}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignStatus: e.target.value
                }))}/>

            {/*Start Date*/}
            <TextField
                required={true}
                label={"Start Date"}
                value={campaignToSubmit.campaignStartDate}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignStartDate: e.target.value
                }))}
            />

            {/*End Date*/}
            <TextField
                label={"End Date"}
                value={campaignToSubmit?.campaignEndDate}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignEndDate: e.target.value
                }))}
            />

            <Button
                onClick={() => handleCancelClick()}
            >Cancel
            </Button>
            <Button
                onClick={() => {
                    handleConfirm(campaignToSubmit)
                }}
            >Confirm</Button>
        </form>
    )
};