import rentAdsMockData from './rent-ads-mock-data';
import RentAd from './rent-ad';

/**
 * This is a fake API to fetch rent ads mock data.
 */
class RentAdsAPI {

  /**
   * Fetch rent ads
   *
   * @returns {Promise<[RentAd]>}
   */
  static fetchAds() {
    return new Promise((resolve, reject) => {
      const rentAds = rentAdsMockData.map( (rawData)=> {
        return RentAd.withData(rawData);
      });
      resolve(rentAds);
    });
  }

}

export default RentAdsAPI;
