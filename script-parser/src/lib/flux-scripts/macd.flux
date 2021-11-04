+++script1+++

+++script2+++

+++name+++ = join(tables: {a: +++ema1+++, b: +++ema2+++}, on: ["_time"])
                |> map(fn: (r) => ({_time: r._time, _value: math.abs(x: r._value_a - r._value_b)}))
                |> set(key: "_measurement", value: "macd")
                |> set(key: "_field", value: "+++name+++")
                |> to(org: "+++influxorganization+++", bucket: "+++influxbucket+++")