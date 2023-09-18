import { Avatar, Box, Theme, Typography, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
import ProfileImage from '../assets/github-task-profile-image.jpeg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typeToSearchButtonLogo: {
            gap: "0.25rem",
            paddingRight: "0.5rem"
        },
        body: {
            width: "30%",
            border: "1px solid red",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        },
        large: {
            width: "18rem",
            height: "18rem",
        },
        name: {

        },
        username: {

        }
    }),
);

const UserProfile = () => {
    const classes = useStyles();

    return (
        <Box className={classes.body}>
            <Box>
                <Avatar src={ProfileImage} className={classes.large} />
                <Box>
                    <Typography className={classes.name}>Dominic Szablewski</Typography>
                    <Typography className={classes.username}>phoboslab</Typography>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default UserProfile