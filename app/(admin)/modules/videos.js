import React from 'react';
import {
  // Show,
  // Filter,
  // SimpleShowLayout,
  // RichTextField,
  // ReferenceManyField,
  // DateField,
  // DisabledInput,
  // LongTextInput,
  BooleanInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  FileInput,
  NumberInput,
  FileField,
  NumberField,
  ImageField,
  Create,
  Edit,
  DeleteButton,
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin';
import BackButton from '@/components/admin/BackButton';
import MyUrlField from '@/components/admin/MyUrlField';

export const VideoList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" label="标题" />
        <NumberField source="single_play_cost" label="单价" />
        <NumberField source="view_count" label="点击量" />
        <ReferenceField label="分类" source="category_id" reference="categories">
          <TextField source="chinese_name" />
        </ReferenceField>
        <MyUrlField source="source_url" label="地址" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export const VideoCreate = props => {
  return (
    <>
      <Create {...props}>
        <SimpleForm>
          <TextInput source="title" label="标题" />
          <TextInput source="single_play_cost" label="单价" />
          <TextInput source="source_url" type="url" label="视频文件(绝对地址)" />
          <NumberInput source="view_count" format={v => v ? v : 0} label="点击量" />
          <NumberInput source="total_playback_count" format={v => v ? v : 0} label="播放量" />
          <ReferenceInput source="category_id" reference="categories">
            <SelectInput optionText="chinese_name" label="分类" />
          </ReferenceInput>
          <FileInput source="thumbnail" accept="image/*" label="封面图片 (390 x 168)">
            <FileField source="thumbnail" title="title" />
          </FileInput>
          <BooleanInput label="隐藏本视频" source="is_draft" />
        </SimpleForm>
      </Create>
      <BackButton />
    </>
  )
}

export const VideoEdit = props => {
  return (
    <>
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="title" label="标题" />
          <TextInput source="single_play_cost" label="单价" />
          <TextInput source="source_url" type="url" label="视频文件(绝对地址)" />
          <NumberInput source="view_count" label="点击量" />
          <NumberInput source="total_playback_count" format={v => v ? v : 0} label="播放量" />
          <ReferenceInput source="category_id" reference="categories">
            <SelectInput optionText="chinese_name" label="分类" />
          </ReferenceInput>
          <ImageField source="thumbnail" title="thumbnail" label="图片预览" />
          <FileInput source="thumbnail" accept="image/*" label="封面图片 (390 x 168)">
            <FileField source="thumbnail" title="title" />
          </FileInput>
          <BooleanInput label="隐藏本视频" source="is_draft" />
        </SimpleForm>
      </Edit>

      <BackButton />
    </>
  )
}