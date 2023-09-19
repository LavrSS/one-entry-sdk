interface ITemplatesPreview {
    getTemplatesPreview(): Promise<any>;
    getTemplatesPreviewById(id: number): Promise<any>;
    getTemplatesPreviewByMarker(marker: string): Promise<any>;
}
export { ITemplatesPreview };
