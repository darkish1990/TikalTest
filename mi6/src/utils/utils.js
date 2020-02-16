import axios from "axios";

export const distanceValue = (lat1, lon1, lat2, lon2) => {
  function toRad(Value) {
    /** Converts numeric degrees to radians */
    return (Value * Math.PI) / 180;
  }
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};

export const getDistanceData = address => {
  let address2 = address.split(" ").join("%20");
  axios
    .get(
      `https://locationiq.org/v1/search.php?key=607aa684f399f5&q=${address2}&format=json`
    )
    .then(data => {
      console.log(data.data[0]);
    });
};


export const getMax = obj => {
    return Object.keys(obj).filter(Filter => {
      return (
        obj[Filter] ===
        Math.max.apply(null, Object.values(obj))
      );
    });
  };

  export const getMin = obj => {
    return Object.keys(obj).filter(Filter => {
      return (
        obj[Filter] ===
        Math.min.apply(null, Object.values(obj))
      );
    });
  };