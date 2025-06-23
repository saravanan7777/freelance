"use client"
import { useEffect, useRef, useState } from "react"
import { Color } from "three"
import ThreeGlobe from "three-globe"
import { Canvas, extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import countries from "@/data/globe.json"

extend({ ThreeGlobe: ThreeGlobe })

const RING_PROPAGATION_SPEED = 1
const aspect = 1.2
const cameraZ = 300

export function Globe({ globeConfig, data }) {
  const globeRef = useRef(null)
  const groupRef = useRef()
  const [isInitialized, setIsInitialized] = useState(false)

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#ffffff",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe()
      groupRef.current.add(globeRef.current)
      setIsInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return

    const globeMaterial = globeRef.current.globeMaterial()
    globeMaterial.color = new Color(defaultProps.globeColor)
    globeMaterial.emissive = new Color(defaultProps.emissive)
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity
    globeMaterial.shininess = defaultProps.shininess
  }, [
    isInitialized,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ])

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return

    const arcs = data
    const points = []
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i]
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      })
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      })
    }

    const filteredPoints = points.filter(
      (v, i, a) => a.findIndex((v2) => ["lat", "lng"].every((k) => v2[k] === v[k])) === i,
    )

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor)

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => d.startLat * 1)
      .arcStartLng((d) => d.startLng * 1)
      .arcEndLat((d) => d.endLat * 1)
      .arcEndLng((d) => d.endLng * 1)
      .arcColor((e) => e.color)
      .arcAltitude((e) => e.arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => e.order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime)

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2)

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings)
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ])

  // 🔁 Arc re-animation effect
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return

    const interval = setInterval(() => {
      globeRef.current.arcsData([]) // Clear arcs
      setTimeout(() => {
        globeRef.current.arcsData(data) // Restart arcs
      }, 30)
    }, defaultProps.arcTime + 4500)

    return () => clearInterval(interval)
  }, [isInitialized, data, defaultProps.arcTime])

  // 🔄 Ring animation effect
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return

    const interval = setInterval(() => {
      if (!globeRef.current) return

      const newNumbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5))

      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }))

      globeRef.current.ringsData(ringsData)
    }, 2000)

    return () => clearInterval(interval)
  }, [isInitialized, data])

  return <group ref={groupRef} />
}

export function World(props) {
  const { globeConfig } = props

  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov: 50, near: 180, far: 1800 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <fog attach="fog" args={["#ffffff", 400, 2000]} />
      <ambientLight intensity={1} color={globeConfig.ambientLight || "#ffffff"} />
      <directionalLight position={[-400, 100, 400]} intensity={1} color={globeConfig.directionalLeftLight || "#ffffff"} />
      <directionalLight position={[400, -100, -400]} intensity={0.5} color={globeConfig.directionalRightLight || "#ffffff"} />
      <pointLight position={[0, 0, 0]} intensity={0.4} color={globeConfig.pointLight || "#ffffff"} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  )
}

export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

export function genRandomNumbers(min, max, count) {
  const arr = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (!arr.includes(r)) arr.push(r)
  }
  return arr
}
