//API for adding doctors

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      passwoard,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    console.log(
      {
        name,
        email,
        passwoard,
        speciality,
        degree,
        experience,
        about,
        fees,
        address,
      },
      imageFile,
    );
  } catch (error) {}
};

export { addDoctor };
