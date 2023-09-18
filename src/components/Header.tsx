import { Avatar, Box, Container, SvgIcon, Theme, Typography, createStyles, makeStyles } from '@material-ui/core'
import githubLogo from '../assets/github-mark.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            border: "1px solid red",
            width: "100%",
            paddingTop: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        },
        box: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        lowerBox: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.75rem",
            overflow: "scroll"
        },
        myLg: {
            maxWidth: 'initial'
        },
        medium: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        myBox: {
            padding: "0px",
            display: "flex",
            alignItems: "center",
            maxWidth: "fit-content",
            gap: "1rem"
        },
        username: {
            color: " #1f2328",
            fontSize: "14px",
            fontWeight: 600,
        },
        svgProps: {
            width: "33px",
            height: "33px",
            borderRadius: "6px",
            border: "1px solid #d0d7de",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
        },
        lowerBoxActionItemClass: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 8px 8px 8px"
        },
        lowerBoxActionItemsNumber: {
            backgroundColor: "#afb8c133",
            padding: "5px 10px",
            borderRadius: "40%",
            fontSize: "12px",
            fontWeight: 550
        },
        lowerBoxActionItemsActive: {
            borderBottom: "2px solid #fd8c73",
            fontWeight: 600
        },
        lowerBoxActionItemsActiveTypography: {
            fontWeight: 600
        },
        lowerBoxActionItemsName: {
            fontSize: "14px"
        },
        sideBoxItems: {
            display: "flex",
            gap: "8px",
            alignItems: "center",
            maxWidth: "max-content"
        },
        headerQuickButtons: {
            border: "1px solid #d0d7de",
            borderRadius: "6px",
            color: "#656d76",
            width: "32px",
            height: "32px",
            verticalAlign: "middle",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        profileImageButton: {
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        headerActionButtons: {
            fontSize: "16px"
        },
        headerQuickButtonsDuo: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0rem 0.5rem"
        },
        typeToSearchButton: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        headerActionButtonssvg: {
            padding: "0px 5px"
        },
        typeToSearchButtonBox: {
            minWidth: "20rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        typeToSearchText: {
            fontSize: "14px"
        },
        typeToSearchButtonLogo: {
            gap: "0.25rem",
            paddingRight: "0.5rem"
        }
    }),
);

const Header = () => {
    const classes = useStyles();

    const lowerBoxActionItems = [{
        name: "Overview",
        path: "M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z",
        count: undefined,
        isActive: false
    },
    {
        name: "Repositories",
        path: "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z",
        count: 36,
        isActive: true
    },
    {
        name: "Projects",
        path: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z",
        count: undefined,
        isActive: false
    },
    {
        name: "Packages",
        path: "m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z",
        count: undefined,
        isActive: false
    },
    {
        name: "Stars",
        path: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z",
        count: 120,
        isActive: false
    },
    ]

    return (
        <Container className={classes.container} classes={{ maxWidthLg: classes.myLg }}>
            <Box className={classes.box}>
                <Box className={classes.myBox}>
                    <Box className={classes.svgProps}>
                        <SvgIcon fontSize='inherit' viewBox='0 0 16 16'>
                            <path
                                d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
                            ></path>
                        </SvgIcon>

                    </Box>
                    <Avatar alt="Github Logo" src={githubLogo} className={classes.medium} />
                    <Typography className={classes.username}>phoboslab</Typography>
                </Box>

                <Box className={classes.sideBoxItems}>

                    <Box className={`${classes.headerQuickButtons} ${classes.typeToSearchButtonBox}`}>
                        <Box className={classes.typeToSearchButton}>
                            <SvgIcon className={`${classes.headerActionButtons} ${classes.headerActionButtonssvg}`} viewBox='0 0 16 16'>
                                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                            </SvgIcon>
                            <Typography className={classes.typeToSearchText}>Type / to search</Typography>
                        </Box>
                        <Box className={`${classes.typeToSearchButton} ${classes.typeToSearchButtonLogo}`}>
                            <Typography className={classes.typeToSearchText}>|</Typography>
                            <SvgIcon className={classes.headerActionButtons} viewBox='0 0 16 16'>
                                <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
                            </SvgIcon>
                        </Box>
                    </Box>

                    <Box className={`${classes.headerQuickButtons} ${classes.headerQuickButtonsDuo}`}>
                        <SvgIcon className={classes.headerActionButtons} viewBox='0 0 16 16'>
                            <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" ></path>
                        </SvgIcon>
                        <SvgIcon className={classes.headerActionButtons} viewBox='0 0 16 16'>
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                        </SvgIcon>
                    </Box>
                    <Box className={classes.headerQuickButtons}>
                        <SvgIcon className={classes.headerActionButtons} viewBox='0 0 16 16'>
                            <path d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'></path>
                        </SvgIcon>
                    </Box>
                    <Box className={classes.headerQuickButtons}>
                        <SvgIcon className={classes.headerActionButtons} viewBox='0 0 16 16'>
                            <path d='M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z'></path>
                        </SvgIcon>
                    </Box>

                    <Avatar className={`${classes.headerQuickButtons} ${classes.profileImageButton}`} alt='userIcon' src='https://avatars.githubusercontent.com/u/122078086?v=4' />
                </Box>
            </Box>

            <Box className={classes.lowerBox}>
                {
                    lowerBoxActionItems.map((item) =>
                        <Box key={item.name} className={`${classes.lowerBoxActionItemClass} ${item.isActive && classes.lowerBoxActionItemsActive}`}>

                            <SvgIcon fontSize='inherit' viewBox='0 0 16 16'>
                                <path d={item.path}>
                                </path>
                            </SvgIcon>

                            <Typography className={`${classes.lowerBoxActionItemsName} ${item.isActive && classes.lowerBoxActionItemsActiveTypography}`}>
                                {item.name}
                            </Typography>

                            {item.count && <Typography className={classes.lowerBoxActionItemsNumber}>{item.count}</Typography>}
                        </Box>
                    )
                }
            </Box>
        </Container >
    )
}

export default Header