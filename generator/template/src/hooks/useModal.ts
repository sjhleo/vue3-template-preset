import { ref } from "vue";

// eslint-disable-next-line @typescript-eslint/ban-types
export function useModal<T extends Object>() {
    const showModal = ref(false);
    const model = ref({});
    const onOpenModal = (m: T) => {
        model.value = m;
        showModal.value = true;
    }
    const onAdd = () => {
        onOpenModal({} as T);
    }
    const onEdit = (m: T) => {
        onOpenModal(m);
    }
    return {
        showModal,
        model,
        onAdd,
        onEdit
    }
    
}
