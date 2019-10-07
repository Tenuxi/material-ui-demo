import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		margin: '140px 3% 40px 3%',
		padding: '0px 30px',
	},
	header: {
		marginBottom: 20,
	},
	card: {
		maxWidth: 345,
		margin: '30px 0 30px 25px',

	}
});


const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant='h2' className={classes.header}>
				Etusivu
			</Typography>

			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Linux rules"
						height="200"
						image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Finland_Nationalparks.jpg/250px-Finland_Nationalparks.jpg"
						title="Luonto"
					/>

				</CardActionArea>
			</Card>




			<Typography variant='body1'>
			Elävä luonto Suomessa koostuu pääasiassa metsätalousmetsistä, ojitetuista soista ja järvien eliöyhteisöistä sekä ihmisen vaikutuksen voimakkaimmin muokkaamista viljellyistä alueista ja kaupunkiluonnosta. Lähes luonnontilaisia metsiä ja soita on luonnonpuistoissa, jotka on tarkoitettu tutkimuskäyttöön. Erilaisilla suojelualueilla on metsätalouskäytöltä rauhoitettuja metsiä ja soita. Näitä, samoin kuin monia talousmetsiin kuuluvia alueita käytetään myös virkistysalueina. Suomen pinta-alasta 78 prosenttia on metsän peitossa. Tyypillisesti metsä on sekametsää, jossa havupuut ovat vallitsevia. <br /><br />
			</Typography>
			<Typography variant='body1'>
			Kasvilajisto on pääosin boreaalista. Niityt ovat kasvistoltaan Suomen runsaslajisimpia alueita ja kangasmetsät, rämeet ja karut kalliot vähälajisimpia. Nisäkäslajisto on melko tyypillinen itäiselle havumetsävyöhykkelle. Monen nisäkäslajin pohjoisimmat ja läntisimmät asuinalueet ovat Suomessa. Linnuston erityispiirre on kahlaajien runsaus. Vakituinen kalalajisto on melko niukka, koska merialueet ovat pääsääntöisesti vähäravinteisia, vähäsuolaisia, viileitä ja ison osan vuodesta jään peitossa. Suomessa kuitenkin rannikkovesien matalan suolapitoisuuden takia monet sisävesikalat pärjäävät myös rannikkovesissä. Hyönteislajistokin on pääosin niukkaa, mutta kaksisiipis- ja pistäislajeja on poikkeuksellisen paljon.<br /><br />
			</Typography>
			<Typography variant='body1'>
			Punainen kirja 2019 on Suomessa järjestyksessään kolmas laaja lajien uhanalaisuusarviointi. Sen mukaan noin 10 prosenttia Suomen eliölajeista on uhanalaisia ja trendi on heikkenevään suuntaan.[1]<br /><br />
			</Typography>
		</div>
	);
}

export default Home;