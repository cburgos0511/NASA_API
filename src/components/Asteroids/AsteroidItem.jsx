import React from "react";

const formatNumber = num => {
  return Math.round(num)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
const AsteroidItem = ({
  name,
  velocity,
  mag,
  minDiameter,
  maxDiameter,
  danger,
  miss
}) => {
  const boom = danger ? (
    <div className="alt alert-danger">Danger</div>
  ) : (
    <div className="alt alert-success">Safe</div>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{mag}</td>
      <td>{formatNumber(velocity)} mph</td>
      <td>
        {formatNumber(minDiameter)}-{formatNumber(maxDiameter)} ft
      </td>
      <td>{formatNumber(miss)}</td>
      <td>{boom}</td>
    </tr>
  );
};

export default AsteroidItem;
