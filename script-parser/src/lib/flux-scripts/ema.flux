+++name+++ = from(bucket: "+++influxbucket+++")
    |> range(start: -1m)
    |> filter(
        fn: (r) => r._measurement == "+++influxmeasurement+++" and r._field == "+++pricekey+++",
    )
    |> exponentialMovingAverage(n: +++period+++)
