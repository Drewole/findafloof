import React from 'react'

export default async (req, res) => {

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.PF_API_CLIENTID);
    params.append("client_secret", process.env.PF_API_CLIENTSECRET);
    const petfinderRes = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
            method: "POST",
            body: params
        }
    );
    const data = await petfinderRes.json();
    res.send(data);
};
