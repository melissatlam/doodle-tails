let doodleAdopt = [];
let id = 1;

const getDoodles = (req, res) => {
  res.status(200).json(doodleAdopt);
};

const postDoodles = (req, res) => {
  // console.log(req,body)

  const { img, name, breed, info } = req.body

  const adopt = {
    id: id,
    img: img,
    name: name,
    breed: breed,
    info: info
  };

  doodleAdopt.push(adopt);
    //   id,
    //   img,
    //   name,
    //   breed,
    //   info
 
  id++;
  res.status(200).json(doodleAdopt);
};

const updateDoodles = (req, res) => {
  const id = req.params.id;
  const { img, name, breed, info } = req.body;
  const targetIndex = doodleAdopt.findIndex(adopt => adopt.id === +id);

  doodleAdopt[targetIndex].img = img || doodleAdopt[targetIndex].img;
  doodleAdopt[targetIndex].name = name || doodleAdopt[targetIndex].name;
  doodleAdopt[targetIndex].breed = breed || doodleAdopt[targetIndex].breed;
  doodleAdopt[targetIndex].info = info || doodleAdopt[targetIndex].info;

  res.status(200).json(doodleAdopt);
};

const removeDoodles = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < doodleAdopt; i++) {
    if (doodleAdopt[i].id == id) {
      doodleAdopt.splice(i, 1);
    }
  }
  res.status(200).json(doodleAdopt);
};

module.exports = {
  getDoodles,
  postDoodles,
  updateDoodles,
  removeDoodles
};
