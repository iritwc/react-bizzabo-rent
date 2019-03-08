import _assign from 'lodash/assign';

export const Status = {
  Active: 'active',
  Closed: 'closed',
};

class RentAd {

  constructor() {
    this.id = null;
    this.status = null;
    this.rooms = null;
    this.message = null;
    this.rentPrice = null;
    this.squareMetersSize = null;
    this.floor = null;
    this.numberOfFloors = null;
    this.hasParking = null;
    this.owner = null;
    this.phone = null;
    this.address = null;
    this.latitude = null;
    this.longitude = null;
    this.createdAt = null;
    this.favorite = null;
  }

  static withData(data) {
    return _assign(new RentAd(), data);
  }

}

export default RentAd;
