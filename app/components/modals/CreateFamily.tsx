import {
  Button,
  Divider,
  Flex,
  Modal,
  Stack,
  Select,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconInfoCircle, IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

interface CreateFamilyProps {
  opened: boolean;
  onClose: () => void;
}

export default function CreateFamily({ opened, onClose }: CreateFamilyProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Créer une famille"
      styles={{ title: { fontSize: 18, fontWeight: 700 } }}
      size={800}
    >
      <Stack gap={24}>
        <Flex gap={20} direction={'row'}>
          <Stack w="100%">
            <Flex direction={'row'} gap={5} align={'flex-end'}>
              <TextInput
                label="Nom de famille"
                placeholder="Moulinet d'Hardemare"
                withAsterisk
                required
                styles={{
                  input: {
                    fontSize: 14,
                  },
                  label: {
                    fontWeight: 600,
                  },
                }}
              />
              <TextInput
                label="Particule"
                placeholder="du"
                maw="30%"
                styles={{
                  input: {
                    fontSize: 14,
                  },
                  label: {
                    fontWeight: 600,
                  },
                }}
              />
            </Flex>
            <TextInput
              placeholder="d'Hardemare"
              label={
                <Flex align="center" gap={4} fw={600}>
                  {"Nom d'usage"}
                  <Tooltip
                    fz={12}
                    withinPortal={false}
                    position="top-start"
                    withArrow
                    label={<>Nom communément utilisé</>}
                  >
                    <IconInfoCircle size={16} />
                  </Tooltip>
                </Flex>
              }
              styles={{
                input: {
                  fontSize: 14,
                },
              }}
            />
            <TextInput
              placeholder="Normandie"
              label={
                <Flex align="center" gap={4} fw={600}>
                  {"Lieu d'origine"}
                  <Tooltip
                    fz={12}
                    withinPortal={false}
                    position="top-start"
                    withArrow
                    label={<>Region historique de la famille</>}
                  >
                    <IconInfoCircle size={16} />
                  </Tooltip>
                </Flex>
              }
              styles={{
                input: {
                  fontSize: 14,
                },
              }}
            />
          </Stack>
          <Stack w="100%">
            <Text fz={14} fw={600}>
              Blason héraldique
            </Text>
            <Dropzone
              onDrop={(files) => console.log('Accepted files:', files)}
              onReject={(files) => console.log('Rejected files:', files)}
              accept={IMAGE_MIME_TYPE}
              maxSize={5 * 1024 ** 2}
              style={{
                border: '2px dashed var(--mantine-color-gray-4)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <Flex
                justify="center"
                align="center"
                direction="column"
                style={{
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
                gap={12}
              >
                <Dropzone.Accept>
                  <IconUpload
                    style={{
                      width: '20%',
                      height: '20%',
                      color: 'var(--mantine-color-blue-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{
                      width: '20%',
                      height: '20%',
                      color: 'var(--mantine-color-red-6)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconPhoto
                    style={{
                      width: '20%',
                      height: '20%',
                      color: 'var(--mantine-color-dimmed)',
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>
                <Text fz={12} style={{ textAlign: 'center', width: '100%' }}>
                  Glissez vos images ici ou cliquez pour sélectionner des fichiers
                </Text>
              </Flex>
            </Dropzone>
            <TextInput
              label="Devise héraldique"
              placeholder="D'argent à trois anilles de sable."
              styles={{
                input: {
                  fontSize: 14,
                },
                label: {
                  fontWeight: 600,
                },
              }}
            />
            <Flex direction={'row'} gap={8} align="flex-end">
              <Select
                label="Titre de noblesse"
                placeholder="Vicomte"
                data={[
                  { value: 'prince', label: 'Prince' },
                  { value: 'duc', label: 'Duc' },
                  { value: 'grave', label: 'Grave' },
                  { value: 'comte', label: 'Comte' },
                  { value: 'vicomte', label: 'Vicomte' },
                  { value: 'baron', label: 'Baron' },
                  { value: 'chevalier', label: 'Chevalier' },
                  { value: 'ecuyer', label: 'Écuyer' },
                ]}
                styles={{
                  input: {
                    fontSize: 14,
                  },
                  label: {
                    fontWeight: 600,
                  },
                }}
              />
              <TextInput
                label="Date d'anoblissement"
                styles={{
                  input: {
                    fontSize: 14,
                  },
                  label: {
                    fontWeight: 600,
                  },
                }}
              />
            </Flex>
            <TextInput
              label="Titres honorifiques"
              placeholder="Seigneur de Pontchartry, d'Ozé, de Bonnebos et de Champeaux"
              styles={{
                input: {
                  fontSize: 14,
                },
                label: {
                  fontWeight: 600,
                },
              }}
            />
          </Stack>
        </Flex>

        <Divider />

        <Flex gap={14} wrap="wrap">
          <Button onClick={onClose} variant="default" type="button" maw="100%">
            Annuler
          </Button>
          <Button maw="100%">Creer</Button>
        </Flex>
      </Stack>
    </Modal>
  );
}
