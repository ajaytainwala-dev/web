import { NextResponse } from 'next/server';
import SendEmail from '../../../utils/sendRegisterEmail.utils.js';

export async function GET(request) {
    return NextResponse.json({ message: 'Hello from GET request!' });
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);

    // if (!data.email || !data.subject || !data.message) {
    //     return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
    // }

    // // Assuming SendEmail is a function that sends an email
    try {
        await SendEmail(data,data.firstName,data.lastName,"New Student Registered");
        return NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
