import "math"

option task = {name: "+++influxtask+++", every: +++interval+++, offset: 1s}

+++script1+++

+++script2+++

join(tables: {a: +++indicator1+++, b: +++indicator2+++}, on: ["_time"])
	|> map(fn: (r) =>
		({_time: r._time, _value: if r._value_a +++operator+++ r._value_b then 1 else 0}))
	|> set(key: "_measurement", value: "downsamplings")
	|> set(key: "_field", value: "+++endpoint+++")
	|> to(org: "+++influxorganization+++", bucket: "+++influxbucket+++")