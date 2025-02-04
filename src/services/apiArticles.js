import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.log(error);
    throw new Error("Articles could not be loaded");
  }

  return data;
}

export async function createArticleAPI(newArticle, id) {
  const imageName = `${Math.random()}-${newArticle.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/article-images/${imageName}`;

  const { data, error } = await supabase
    .from("articles")
    .insert([{ ...newArticle, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Article could not be created");
  }

  // 2. Upload Image

  const { error: storageError } = await supabase.storage
    .from("article-images")
    .upload(imageName, newArticle.image);

  // 3. Delete if error while uploading img
  if (storageError) {
    await supabase.from("articles").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Article image could not be uploaded");
  }

  return data;
}

export async function deleteArticle(id) {
  const { data, error } = await supabase.from("articles").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Article could not be deleted");
  }
  return data;
}
