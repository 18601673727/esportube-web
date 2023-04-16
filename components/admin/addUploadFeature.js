const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

const addUploadFeature = (dataProvider) => {
  return {
    ...dataProvider,
    update: (resource, params) => {
      if (resource !== 'posts') {
        // fallback to the default implementation
        return dataProvider.update(resource, params);
      }

      /**
       * For posts update only, convert uploaded image in base 64 and attach it to
       * the `picture` sent property, with `src` and `title` attributes.
       */

      // Freshly dropped pictures are File objects and must be converted to base64 strings
      const newPictures = params.data.thumbnail.filter(
        p => p.rawFile instanceof File
      );
      const formerPictures = params.data.thumbnail.filter(
        p => !(p.rawFile instanceof File)
      );

      return Promise.all(newPictures.map(convertFileToBase64))
        .then(base64Pictures =>
          base64Pictures.map(picture64 => ({
            src: picture64,
            title: `${params.data.title}`,
          }))
        )
        .then(transformedNewPictures =>
          dataProvider.update(resource, {
            data: {
              ...params.data,
              thumbnail: [
                ...transformedNewPictures,
                ...formerPictures,
              ],
            },
          })
        );
    },
  }
};

export default addUploadFeature;
