/**
 * Video Type
 */
export enum EFakeVideoType {
  NATIVE,
  YOUTUBE,
  VIMEO,
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
export default class Fake {
  // --------------------------------------------------------------------------- DATAS

  // image API
  private static imageApi = "https://picsum.photos";

  // Collection of NPR tiny desk concert youtube video Ids
  private static youtubeIds = [
    "gxlA6JB3Z6w",
    "ferZnZ0_rSM",
    "qYPQ0EUmbTs",
    "mVJjmyFfuts",
    "SiDBiIsFiqU",
    "vfzu33BfRHE",
    "QKzobTCIRDw",
    "yXrlhebkpIQ",
    "YJ-efUsAhc8",
    "weL8HTY1NJU",
    "peYcNm3JTe8",
    "XyW5Zz0w1zg",
    "vPBirt1YhuM",
    "GP3jS_gFs-g",
    "oGTVoX7AaRc",
  ];

  // Collection of skate and snowboad vimeo video Ids
  private static vimeoIds = [
    "142320599",
    "17363035",
    "36168588",
    "208432684",
    "88665448",
    "2497587",
    "32773959",
    "29405767",
    "217388307",
    "25915873",
    "153347836",
    "63741693",
    "145049057",
    "16247888",
  ];

  // Collection of native video urls
  // @source: https://gist.github.com/jsturgis/3b19447b304616f18657
  private static nativeVideosUrl = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  ];

  private static lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Donec egestas lacus et porta congue.",
    "Proin semper mauris et hendrerit euismod.",
    "Aenean bibendum nunc a nunc aliquam vulputate vitae in nisi.",
    "Nam faucibus ipsum condimentum, lobortis ante quis, tempus nunc.",
    "Vivamus vulputate nisi nec metus pulvinar scelerisque non in ex.",
    "Duis quis eros vel metus vehicula tristique eu id ipsum.",
    "In ac nisi pharetra sem efficitur placerat.",
    "Nam finibus turpis at quam pulvinar, et elementum ante pharetra.",
    "Sed vel massa lacinia dolor lacinia molestie.",
    "Curabitur fermentum ante id mi tristique commodo.",
    "Aliquam at mi eu orci ultrices dignissim ut vel sem.",
    "Pellentesque iaculis odio vel leo venenatis, ut vehicula mauris varius.",
    "Etiam ac risus eget odio hendrerit iaculis non ac libero.",
    "Curabitur in augue in urna ultrices porta.",
  ];

  // --------------------------------------------------------------------------- UTILS

  /**
   * Get random value between min and max
   * @param pMin
   * @param pMax
   */
  private static randomIntFromInterval(pMin: number, pMax: number) {
    return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
  }

  /**
   * Get random Value from array
   * @param pArray: array we pick a random value
   */
  private static randomValueFromArray(pArray: any[]): any {
    return pArray[Math.floor(Math.random() * pArray.length)];
  }

  /**
   * Shuffle an indexed array.
   * Source : https://bost.ocks.org/mike/shuffle/
   * @param pArray The indexed array to shuffle.
   * @return Original instance of array with same elements at other indexes
   */
  private static shuffleArray(pArray: any[]): any[] {
    let currentIndex = pArray.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = pArray[currentIndex];
      pArray[currentIndex] = pArray[randomIndex];
      pArray[randomIndex] = temporaryValue;
    }

    return pArray;
  }

  // --------------------------------------------------------------------------- PUBLIC API

  /**
   * Get Responsive Image Data
   * @param {number} pRatio: Image ratio
   * @param {number[]} pBeakpoints: Breakpoints list
   * @return {IFakeImage[]} return a array of IFakeImage
   */
  public static responsiveImageData(
    pRatio: number = 4 / 3,
    pBeakpoints: number[] = [640, 1024, 1440, 1920]
  ): IFakeImage[] {
    //  build array
    const fakeImageArray: IFakeImage[] = pBeakpoints.map((el) => {
      // get image size depend of el
      const imageSize = {
        width: el,
        height: Math.round(el / pRatio),
      };
      // build url
      const buildURL = [
        // API
        this.imageApi,
        // random id
        "/id/",
        Fake.randomIntFromInterval(1, 200),
        // size
        "/",
        imageSize.width,
        "/",
        imageSize.height,
      ].join("");
      // return build URL
      return {
        url: buildURL,
        width: imageSize.width,
        height: imageSize.height,
      };
    });
    return fakeImageArray;
  }

  /**
   * Get video URL
   * @param pVideoType
   * @param pYoutubeId
   * @param pVimeoId
   * @return {string} video URL
   */
  public static videoUrl(
    pVideoType: EFakeVideoType,
    pYoutubeId: string = Fake.randomValueFromArray(
      Fake.youtubeIds
    ),
    pVimeoId: string = Fake.randomValueFromArray(
      Fake.vimeoIds
    )
  ): string {
    // if is youtube
    if (pVideoType === EFakeVideoType.YOUTUBE) {
      return `https://youtu.be/${pYoutubeId}`;
    }
    // if is vimeo
    if (pVideoType === EFakeVideoType.VIMEO) {
      return `https://vimeo.com/${pVimeoId}`;
    }
    // if is native
    if (pVideoType === EFakeVideoType.NATIVE) {
      const url = Fake.randomValueFromArray(
        Fake.nativeVideosUrl
      );
      return url;
    }
  }

  /**
   * Get video ID
   * @param pVideoType
   * @return {string} video ID
   */
  public static videoId(
    pVideoType: EFakeVideoType.YOUTUBE | EFakeVideoType.VIMEO
  ): string {
    if (pVideoType === EFakeVideoType.YOUTUBE) {
      return Fake.randomValueFromArray(Fake.youtubeIds);
    }
    if (pVideoType === EFakeVideoType.VIMEO) {
      return Fake.randomValueFromArray(Fake.vimeoIds);
    }
  }

  /**
   * Get Title
   * @param {number} pWords: number of words we want to compose the title
   * @return {string} the title
   */
  public static title(pWords: number = 1): string {
    // get lorem text array
    const lorem: string[] = Fake.lorem;

    return (
      // get a random value from array
      Fake.randomValueFromArray(lorem)
        // split each spaces to get words
        .split(" ")
        // map each words and keep if only right number
        .map((el: any, i: number) => (i <= pWords - 1 ? el : null))
        // remove null values
        .filter((v: any) => v)
        // join result as string
        .join(" ")
    );
  }

  /**
   * Get regular text
   * @param {number} pSentences: number of sentences we want to compose text
   * @return {string} text
   */
  public static text(pSentences: number = 1): string {
    // get lorem text array
    const lorem: string[] = Fake.lorem;
    // register text
    const text =
      // shuffle lorem array
      Fake.shuffleArray(lorem)
        // map all sentences
        .map((el: any, i: number) =>
          // keep only right sentences number
          i <= pSentences - 1 ? el : null
        )
        // remove null values
        .filter((v) => v)
        // join results as string
        .join(" ");

    // return text result
    return text;
  }

  /**
   * Get HTML text
   * @param pLength
   * TODO
   */
  public static html(pLength: number = 1): string {
    return "";
  }
}
