exports.create = data => {
    const dto = {
        motivo: data.motivo,
        medicoId: data.medicoId,
        pacienteId: data.pacienteId,
    }
    if(data.medicamentos) dto.medicamentos = data.medicamentos;
    if(data.medicamentos) dto.ayudasDiagnosticas = data.ayudasDiagnosticas;
    return dto;
}