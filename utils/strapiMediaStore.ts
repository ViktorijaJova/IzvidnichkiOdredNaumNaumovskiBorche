export class StrapiMediaStore {
  strapiUrl: string;
  accept = '*';

  constructor(strapiUrl: string) {
    if (!strapiUrl) {
      throw new Error('Missing strapiURL in StrapiMediaStore');
    }
    this.strapiUrl = strapiUrl;
  }

  async delete(media: any) {
    await fetch(`${this.strapiUrl}/upload/files/${media.id}`, {
      method: 'DELETE',
    });
  }

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append('files', file);
    const uploadResponse: Response = await fetch(`${this.strapiUrl}/upload`, {
      method: 'post',
      body: formData,
    });

    if (uploadResponse.status != 200) {
      throw Error(uploadResponse.statusText);
    }
    return uploadResponse.json();
  }

  async previewSrc(id: string) {
    const response = await fetch(`${this.strapiUrl}/upload/files/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return this.strapiUrl + data.url;
  }

  getFilePath(fileUrl: string): string {
    return fileUrl.split('?')[0];
  }

  getFileId(fileUrl: string): string {
    return fileUrl.split('?')[1];
  }

  getAbsolutePath(fileUrl: string): string {
    return this.strapiUrl + fileUrl;
  }
}
