import { useRef, useState, useEffect } from 'react'
import { createRailway } from 'use-railway'

export { ActionMap, Command, Effect, UpdateMap } from 'use-railway'
export const useRailway = createRailway({ useRef, useState, useEffect })
