import { compile } from 'json-schema-to-typescript'
import { readYaml } from "../utils/yaml"
import path from 'path'
import { writeFile } from 'fs/promises'

const GEN_TYPES_FILE = './src/types/gen.d.ts';

(async() => {
	const schema = await readYaml<any>('src/libraries/validator/schema.yaml')
	// console.log('Generating types for schema...', schema)
	const result = await compile(schema.Validations, 'Schema', { 
		$refOptions: {
			resolve: {
				file: {
					read: (file) => {
						console.log('Reading file', file)
						const parsed = path.parse(file.url)
						return schema[parsed.name]
					}
				}
			}
		}
	})
	await writeFile(GEN_TYPES_FILE, result)
})()