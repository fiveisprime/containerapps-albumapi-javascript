import { getAlbums } from "../models/Album.js";

export default async function (req, res) {
  const albums = await getAlbums();
  console.log("Retrieved Albums");
  res.json(albums);
};
