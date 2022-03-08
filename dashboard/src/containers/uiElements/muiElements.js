import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export default function BadgeVisibility(props) {
	const { Icon, invisible, title, activeNav } = props;
	return (
		<Box className={`icon ${activeNav}`}>
			<div className='iconCntr'>
				<Badge color='secondary' variant='dot' invisible={invisible}>
					<Tooltip title={title} arrow>
						<Icon />
					</Tooltip>
				</Badge>
			</div>
		</Box>
	);
}

export function BasicButtons(props) {
	const { buttonText } = props;
	return (
		<Stack spacing={2} direction='row'>
			<Button variant='contained'>{buttonText}</Button>
		</Stack>
	);
}

export function SelectAutoWidth(props) {
	const { onChangeDate, value } = props;

	const handleChange = (event) => {
		onChangeDate(event);
	};

	return (
		<FormControl sx={{ mr: 1, minWidth: 80 }}>
			<InputLabel id='demo-simple-select-autowidth-label'>
				Select Date
			</InputLabel>
			<Select
				labelId='demo-simple-select-autowidth-label'
				id='demo-simple-select-autowidth'
				value={value}
				onChange={handleChange}
				autoWidth
				label='Select Date Range'>
				<MenuItem value='Last 1 Week'>Last 1 Week</MenuItem>
				<MenuItem value='Last 1 Month'>Last 1 Month</MenuItem>
				<MenuItem value='Last 3 Month'>Last 3 Month</MenuItem>
				<MenuItem value='Last 6 Month'>Last 6 Month</MenuItem>
				<MenuItem value='Last 1 Year'>Last 1 Year</MenuItem>
			</Select>
		</FormControl>
	);
}

export function BasicDatePicker(props) {
	const { date, onChangeDate, label } = props;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label={label}
				value={date}
				onChange={(newValue) => {
					onChangeDate(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}

export function StickyHeadTable(props) {
	const { data } = props;
	const keys = data.map((each) => Object.keys(each));

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 600 }}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow className='tableheader'>
							{keys[0].map((each) => (
								<TableCell
									key={each}
									align='center'
									style={{ minWidth: each.minWidth }}>
									{each}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row, index) => {
							return (
								<TableRow hover role='checkbox' tabIndex={-1} key={index}>
									{keys[0].map((column) => {
										const value = row[column];
										const v = column === "_id" ? index + 1 : value;
										return (
											<TableCell key={column} align='center'>
												{v}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}>
			{"Copyright © "}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='family-name'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='#' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	);
}

export function SignIn() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='#' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
