/**
 * Video Type
 */
export declare enum EFakeVideoType {
    NATIVE = 0,
    YOUTUBE = 1,
    VIMEO = 2
}
/**
 * Image interface
 * (same interface than ResponsiveImage IFakeImage)
 */
export interface IFakeImage {
    url: string;
    width: number;
    height: number;
}
/**
 * @name Fake
 * @description Generate fake data to simulate content
 */
export declare class Fake {
    private static imageApi;
    private static youtubeIds;
    private static vimeoIds;
    private static nativeVideosUrl;
    private static lorem;
    /**
     * Get random value between min and max
     * @param pMin
     * @param pMax
     */
    private static randomIntFromInterval;
    /**
     * Get random Value from array
     * @param pArray: array we pick a random value
     */
    private static randomValueFromArray;
    /**
     * Shuffle an indexed array.
     * Source : https://bost.ocks.org/mike/shuffle/
     * @param pArray The indexed array to shuffle.
     * @return Original instance of array with same elements at other indexes
     */
    private static shuffleArray;
    /**
     * Get Responsive Image Data
     * @param {number} pRatio: Image ratio
     * @param {number[]} pBeakpoints: Breakpoints list
     * @return {IFakeImage[]} return a array of IFakeImage
     */
    static responsiveImageData(pRatio?: number, pBeakpoints?: number[]): IFakeImage[];
    /**
     * Get video URL
     * @param pVideoType
     * @param pYoutubeId
     * @param pVimeoId
     * @return {string} video URL
     */
    static videoUrl(pVideoType: EFakeVideoType, pYoutubeId?: string, pVimeoId?: string): string;
    /**
     * Get video ID
     * @param pVideoType
     * @return {string} video ID
     */
    static videoId(pVideoType: EFakeVideoType.YOUTUBE | EFakeVideoType.VIMEO): string;
    /**
     * Get Title
     * @param {number} pWords: number of words we want to compose the title
     * @return {string} the title
     */
    static title(pWords?: number): string;
    /**
     * Get regular text
     * @param {number} pSentences: number of sentences we want to compose text
     * @return {string} text
     */
    static text(pSentences?: number): string;
    /**
     * Get HTML text
     * @param pLength
     * TODO
     */
    static html(pLength?: number): string;
}
