import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getRequest} from "../../../../common/util/Fetch.js";
import {CAMPAIGN_STATUS_DROPDOWN_OPTIONS, CHANNELS_URL} from "../../../../common/util/constants.js";
import "./MarketingCampaginsCreateUpdateModalForm.scss";

export default function MarketingCampaignsCreateUpdateModalForm(props) {
    const {
        handleConfirm,
        handleCancelClick,
        setCampaignToSubmit,
        campaignToSubmit
    } = props;


    const [channelsList, setChannelsList] = useState([]);

    function handleChannelSelect(event) {
        const selectedValues = event;
        setCampaignToSubmit(prev => ({
            ...prev,
            channelId: selectedValues
        }));
    }

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
        <form className="form-container">
            {/*Name*/}
            <TextField
                required={true}
                label={"Name"}
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
                    value={campaignToSubmit.channelId || []}
                    onChange={(event) => handleChannelSelect(event.target.value)}

                    input={<OutlinedInput label="Channels" />}
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
                slotProps={{inputLabel: {shrink: true}}}
                required={true}
                label={"Budget"}
                type={"number"}
                value={campaignToSubmit.campaignBudget}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignBudget: e.target.valueAsNumber
                }))}/>

            {/*Campaign Status*/}
            <FormControl sx={{minWidth: 200}}>
                <InputLabel>Campaign Status</InputLabel>
                <Select
                    required={true}
                    variant={"filled"}
                    value={campaignToSubmit.campaignStatus}
                    onChange={(e) => setCampaignToSubmit(prev => ({
                        ...prev, campaignStatus: e.target.value
                    }))}
                    input={<OutlinedInput label="Campaign Status"/>}
                >
                    {CAMPAIGN_STATUS_DROPDOWN_OPTIONS.map((status) => (
                        <MenuItem
                            key={status}
                            value={status}
                        >
                            {status}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/*Start Date*/}
            <TextField
                slotProps={{ inputLabel: { shrink: true }}}
                required={true}
                placeholder={"YYYY-MM-DD"}
                label={"Start Date"}
                value={campaignToSubmit.campaignStartDate}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignStartDate: e.target.value
                }))}
            />

            {/*End Date*/}
            <TextField
                slotProps={{inputLabel: {shrink: true}}}
                placeholder={"YYYY-MM-DD"}
                label={"End Date"}
                value={campaignToSubmit?.campaignEndDate}
                onChange={(e) => setCampaignToSubmit(prev => ({
                    ...prev, campaignEndDate: e.target.value
                }))}
            />
            <div>
                <Button
                    onClick={() => handleCancelClick()}
                >Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleConfirm(campaignToSubmit)
                    }}
                >Confirm</Button>
            </div>
        </form>)
};