from(bucket: "+++influxbucket+++")
    |> range(start: -1m)
    |> filter(fn: (r) => r._measurement == "downsamplings" and r._field == "+++endpoint+++")