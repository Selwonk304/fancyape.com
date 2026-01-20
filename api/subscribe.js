export default async function handler(req, res) {
    const { email } = req.body;

    const response = await fetch(`https://api.beehiiv.com/v2/publications/pub_bc6eea7c-94ca-4325-87ab-e1467a262aaa/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer dPgbxiEs52J9oNcWBIWIraBqeoCXE3SDDhutziGrTQM6dsazLJrM28fFhKdaVFTW`
        },
        body: JSON.stringify({
            email: email,
            reactivate_existing: true,
            send_welcome_email: true
        })
    });

    if (response.ok) {
        res.status(200).json({ status: 'success' });
    } else {
        res.status(500).json({ status: 'error' });
    }
}