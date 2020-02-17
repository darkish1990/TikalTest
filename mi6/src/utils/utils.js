import axios from "axios";

export const distanceValue = (latitude1, longtitude1, latitude2, longtitude2) => {
  function toRad(Value) {
    /** Converts numeric degrees to radians */
    return (Value * Math.PI) / 180;
  }
  var R = 6371; // km
  var dLat = toRad(latitude2 - latitude1);
  var dLon = toRad(longtitude2 - longtitude1);
  var lat1 = toRad(latitude1);
  var lat2 = toRad(latitude2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};

export const getDistanceData = async address => {
  let address2 = address.split(" ").join("%20");
  const { data } = await axios
    .get(
      `https://locationiq.org/v1/search.php?key=607aa684f399f5&q=${address2}&format=json`
    )

    console.log(data[0]);
    return data[0];
};

export const getMax = obj => {
  return Object.keys(obj).filter(Filter => {
    return obj[Filter] === Math.max.apply(null, Object.values(obj));
  });
};

export const getMin = obj => {
  return Object.keys(obj).filter(Filter => {
    return obj[Filter] === Math.min.apply(null, Object.values(obj));
  });
};
export const SetTheAgentsAndCountries =(data,agents,countries)=> {
  data.forEach(element => {
    if (agents[element.agent]) {
      agents[element.agent]++;
    } else {
      agents[element.agent] = 1;
    }
  });
  data.forEach(element => {
    if (agents[element.agent] === 1) {
      if (countries[element.country]) {
        countries[element.country]++;
      } else {
        countries[element.country] = 1;
      }
    }
  });
}