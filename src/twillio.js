export async function toBackEnd(phoneNumber, message) {
  try {
    const responce = await fetch(
      "https://thing-backend-ddlc.onrender.com/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          message,
        }),
      }
    );
    await responce.json();
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}
