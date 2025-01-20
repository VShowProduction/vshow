const clientId = import.meta.env.VITE_TWITCH_KEY;
const redirectUri =  import.meta.env.VITE_URL + '/vshow/#/VitiAwards';

const exp = {
    clientId: clientId,
    redirectUri: redirectUri
}

export default exp;
